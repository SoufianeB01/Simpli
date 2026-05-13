using SimpliBackend.Models;

namespace SimpliBackend.Services;

public class AuthService
{
    private static readonly List<User> Users =
    [
        new User
        {
            Email = "emma@rotterdam.nl",
            Password = "1234"
        }
    ];

    public bool Login(LoginRequest request)
    {
        return Users.Any(u =>
            u.Email == request.Email &&
            u.Password == request.Password);
    }
}