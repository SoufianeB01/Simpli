using System.Text.Json.Serialization;

namespace SimpliBackend.Models;

public class ApiResponse
{
    [JsonPropertyName("original_text")]
    public string Original_Text { get; set; } = string.Empty;

    [JsonPropertyName("simplified_text")]
    public string Simplified_Text { get; set; } = string.Empty;

    [JsonPropertyName("readability_before")]
    public Readability Readability_Before { get; set; } = new();

    [JsonPropertyName("readability_after")]
    public Readability Readability_After { get; set; } = new();
}

