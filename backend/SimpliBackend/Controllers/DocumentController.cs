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
    public async Task<IActionResult> Simplify(
        [FromForm] IFormFile file
    )
    {
        if (file == null || file.Length == 0)
            return BadRequest("Geen bestand ontvangen");

        var result = await _service.Simplify(file);

        if (result == null)
            return StatusCode(500, "Python API gaf null terug");

        return Ok(result);
    }
}