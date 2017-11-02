﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Games
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var settings = new JsonSerializerSettings();
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            var serializer = JsonSerializer.Create(settings);
            services.Add(new ServiceDescriptor(typeof(JsonSerializer), 
                        provider => serializer, 
                        ServiceLifetime.Transient));
                        
            services.AddSingleton<Models.AppCache>();

            // Add framework services.
            services.AddMvc();
            services.AddSignalR();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            // if (env.IsDevelopment())
            // {
            //     app.UseDeveloperExceptionPage();
            //     app.UseBrowserLink();
            // }
            // else
            // {
            //     app.UseExceptionHandler("/Home/Error");
            // }

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();

            
            //https://radu-matei.com/blog/aspnet-core-mvc-signalr/
            //https://docs.microsoft.com/en-us/aspnet/signalr/overview/advanced/dependency-injection

            // app.UseSignalR(routes =>
            // {
            //     routes.MapHub<Games.Hubs.TicTacToeHub>("tictactoe");
            //     routes.MapHub<Games.Hubs.GamesHub>("games");
            // });
            app.UseWebSockets();
            app.UseSignalR(routes =>
            {
                //routes.MapHub<Games.Hubs.TicTacToeHub>("tictactoe");
                routes.MapHub<Games.Hubs.GamesHub>("games");
            });
        }
    }
}