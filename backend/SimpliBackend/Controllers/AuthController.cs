using Microsoft.AspNetCore.Mvc;
using SimpliBackend.Models;
using SimpliBackend.Services;

namespace SimpliBackend.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly AuthService _service;

    public AuthController(AuthService service)
    {
        _service = service;
    }

    [HttpPost("login")]
    public IActionResult Login(LoginRequest request)
    {
        var success = _service.Login(request);

        if (!success)
            return Unauthorized();

        return Ok();
    }
}