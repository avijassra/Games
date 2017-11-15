namespace Games {
    using Microsoft.AspNetCore.Builder;

    public static class MiddlewareExtensions {
        public static IApplicationBuilder UseEnvironmentVersionDisplay(this IApplicationBuilder appBuilder) {
            return appBuilder.UseMiddleware<Games.Core.Middlewares.EnvironmentVersionDisplay>();
        }
    }
}