var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

string[] answers = { "Yes", "No", "Maybe", "Not now", "Ask later", "Definitely", "Unlikely", "Your path lies elsewhere", "It depends on you", "The stars say yes" };

app.MapGet("/ask", (string question) =>
{
    int index = new Random().Next(answers.Length);
    return answers[index];
});

app.Run();
