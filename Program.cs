using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace Games
{
    class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseWebRoot(Directory.GetCurrentDirectory())
                .UseStartup<Startup>()
                .UseUrls("http://localhost:5050")
                .Build();

            host.Run();
        }
    }
}