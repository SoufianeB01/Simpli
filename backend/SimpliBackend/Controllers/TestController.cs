using Microsoft.AspNetCore.Mvc;
using SimpliBackend.Services;

namespace SimpliBackend.Controllers;

[ApiController]
[Route("api/test")]
public class TestController : ControllerBase
{
    private readonly TestService _service;

    public TestController(TestService service)
    {
        _service = service;
    }

    [HttpPost("send")]
    public async Task<IActionResult> Send([FromBody] TestRequest request)
    {
        var result = await _service.SendToPython(request.Document_Text);

        return Ok(result);
    }
}

public class TestRequest
{
    public string Document_Text { get; set; } = string.Empty;
}