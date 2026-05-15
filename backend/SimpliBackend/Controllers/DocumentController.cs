using Microsoft.AspNetCore.Mvc;
using SimpliBackend.Services;

namespace SimpliBackend.Controllers;

[ApiController]
[Route("api/document")]
public class DocumentController : ControllerBase
{
    private readonly DocumentService _service;

    public DocumentController(DocumentService service)
    {
        _service = service;
    }

    [HttpPost("simplify")]
    public async Task<IActionResult> Simplify(IFormFile file)
    {
        if (file == null)
            return BadRequest();

        var result = await _service.Simplify(file);

        if (result == null)
            return StatusCode(500);

        return Ok(result);
    }
}