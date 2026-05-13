using SimpliBackend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("frontend",
        policy =>
        {
            policy
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

builder.Services.AddHttpClient();
builder.Services.AddScoped<TestService>();
builder.Services.AddScoped<AuthService>();
builder.Services.AddScoped<FeedbackService>();
builder.Services.AddScoped<DocumentService>();

var app = builder.Build();

app.UseCors("frontend");

app.MapControllers();

app.Run("http://0.0.0.0:5001");