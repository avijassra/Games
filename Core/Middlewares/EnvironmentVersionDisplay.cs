namespace Games.Core.Middlewares {
    using System;
    using System.IO;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Configuration;

    public class EnvironmentVersionDisplay {
        private readonly IConfiguration _config;
        private readonly RequestDelegate _next;

        private bool IsDisplayEnabled {
            get {
                return Convert.ToBoolean(this._config["DisplayEnvironmentVersion"]);
            }
        }

        public EnvironmentVersionDisplay(IConfiguration config, RequestDelegate next)
        {
            this._config = config;
            this._next = next;
        }
        
        public async Task Invoke(HttpContext context) {
            var newHeadContent = AddStyle();
            var newBodyContent = AddFooter();
            var existingBody = context.Response.Body;

            using(var newBody = new MemoryStream()) {
                context.Response.Body = newBody;

                await this._next(context);

                context.Response.Body = existingBody;

                if(!context.Response.ContentType.StartsWith("text/html")) {
                    await context.Response.WriteAsync(new StreamReader(newBody).ReadToEnd());
                    return;
                }
                newBody.Seek(0, SeekOrigin.Begin);

                var newContent = new StreamReader(newBody).ReadToEnd();
                newContent = newContent.Replace("</head>", $"{newHeadContent}</head>");
                newContent = newContent.Replace("</body>", $"{newBodyContent}</body>");

                await context.Response.WriteAsync(newContent);
            }
        }

        private string AddStyle() {
            return @"<style>
                        .app-version { 
                            position: fixed;
                            bottom: 0px;
                            padding: 10px 10px 5px 10px;
                            font-weight: bold;
                            right: 0px;
                            background-color: #d6d8d9;
                            border: 1px solid #c6c8ca;
                            border-radius: .5rem;
                            margin-right: 5px; 
                        }
                    </style>";
        }

        private string AddFooter() {
            var version = this._config["Version"];
            return $"<div class=\"app-version\" >{version}</div>";
        }
    }
}