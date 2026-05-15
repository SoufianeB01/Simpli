using SimpliBackend.Models;

namespace SimpliBackend.Services;

public class FeedbackService
{
    private readonly List<Feedback> _feedbacks = [];

    public void Save(Feedback feedback)
    {
        _feedbacks.Add(feedback);
    }
}