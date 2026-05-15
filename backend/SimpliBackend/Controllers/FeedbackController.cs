using Microsoft.AspNetCore.Mvc;
using SimpliBackend.Models;
using SimpliBackend.Services;

namespace SimpliBackend.Controllers;

[ApiController]
[Route("api/feedback")]
public class FeedbackController : ControllerBase
{
    private readonly FeedbackService _service;

    public FeedbackController(FeedbackService service)
    {
        _service = service;
    }

    [HttpPost]
    public IActionResult Send(Feedback feedback)
    {
        _service.Save(feedback);
        return Ok();
    }
}