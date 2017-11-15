namespace Games.Core.Middlewares {
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Configuration;

    public class EnvironmentVersionDisplay {
        private readonly IConfigurationRoot _config;
        private readonly IHostingEnvironment _env;
        private readonly RequestDelegate _next;

        public EnvironmentVersionDisplay(IConfigurationRoot config,  IHostingEnvironment env, RequestDelegate next)
        {
            this._config = config;
            this._env = env;
            this._next = next;
        }
        
        // public async Task Invoke(HttpContext context) {
        //     var newContent = 

        //     await context.Response.WriteAsync(;
        // }
    }
}