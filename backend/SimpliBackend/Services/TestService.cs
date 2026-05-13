using System.Net.Http.Json;

namespace SimpliBackend.Services;

public class TestService
{
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _config;

    public TestService(HttpClient httpClient, IConfiguration config)
    {
        _httpClient = httpClient;
        _config = config;
    }

    public async Task<object?> SendToPython(string text)
    {
        var url = _config["PythonApi:BaseUrl"] + "/simplify";

        var payload = new
        {
            document_text = text
        };

        var response = await _httpClient.PostAsJsonAsync(url, payload);

        if (!response.IsSuccessStatusCode)
            return new { error = "Python API not reachable" };

        return await response.Content.ReadFromJsonAsync<object>();
    }
}