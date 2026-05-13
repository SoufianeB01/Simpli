namespace SimpliBackend.Models;

public class SimplifyResponse
{
    public string Original_Text { get; set; } = "";
    public string Simplified_Text { get; set; } = "";
    public Readability Readability_Before { get; set; } = new();
    public Readability Readability_After { get; set; } = new();
}