using System.Net.Http.Headers;
using SimpliBackend.Models;

namespace SimpliBackend.Services;

public class DocumentService
{
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _config;

    public DocumentService(HttpClient httpClient, IConfiguration config)
    {
        _httpClient = httpClient;
        _config = config;
    }

    public async Task<ApiResponse?> Simplify(IFormFile file)
    {
        var url = _config["PythonApi:BaseUrl"] + "/simplify";

        using var form = new MultipartFormDataContent();

        using var stream = file.OpenReadStream();

        var content = new StreamContent(stream);

        content.Headers.ContentType =
            new MediaTypeHeaderValue(file.ContentType);

        form.Add(content, "file", file.FileName);

        var response = await _httpClient.PostAsync(url, form);

        if (!response.IsSuccessStatusCode)
            return null;

        return await response.Content
            .ReadFromJsonAsync<ApiResponse>();
    }
}