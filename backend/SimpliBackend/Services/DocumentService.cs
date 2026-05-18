using System.Net.Http.Headers;
using System.Net.Http.Json;
using SimpliBackend.Models;

namespace SimpliBackend.Services;

public class DocumentService
{
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _config;

    public DocumentService(
        HttpClient httpClient,
        IConfiguration config
    )
    {
        _httpClient = httpClient;
        _config = config;
    }

    public async Task<ApiResponse?> Simplify(
        IFormFile file
    )
    {
        var url =
            _config["PythonApi:BaseUrl"]
            + "/simplify-file";

        using var form =
            new MultipartFormDataContent();

        using var stream =
            file.OpenReadStream();

        using var content =
            new StreamContent(stream);

        content.Headers.ContentType =
            MediaTypeHeaderValue.Parse(
                file.ContentType
            );

        form.Add(
            content,
            "file",
            file.FileName
        );

        var response =
            await _httpClient.PostAsync(
                url,
                form
            );

        if (!response.IsSuccessStatusCode)
        {
            var error =
                await response.Content
                    .ReadAsStringAsync();

            throw new Exception(error);
        }

        return await response.Content
            .ReadFromJsonAsync<ApiResponse>();
    }
}