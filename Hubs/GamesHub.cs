namespace Games.Hubs 
{
    using System;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.SignalR;
    using Microsoft.Extensions.DependencyInjection;

    using Models;

    //[HubName("games")]
    public class GamesHub : Hub
    {
        private AppCache _cache;

        //https://stackoverflow.com/questions/32459670/resolving-instances-with-asp-net-core-di
        //https://github.com/aspnet/SignalR/issues/68
        // public GamesHub(AppCache appCache) {
        //     this._cache = appCache;
        // }

        public Task MessageToPublish(string message)
        {
            return Clients.All.InvokeAsync("NewIncomingMessage", message);
        }

        public Task RegisterNewGame(Guid id) {
            //this._cache.Games.Add(new GamesModel(id));
            //return Clients.All.InvokeAsync("GamesWaitingPlayers", $"Game - {id} | {this._cache.Games.Count}");
            return Clients.All.InvokeAsync("GamesWaitingPlayers", $"Game - {id}");
        }
    }
}

//https://blogs.msdn.microsoft.com/webdev/2017/09/14/announcing-signalr-for-asp-net-core-2-0/
//https://stackoverflow.com/questions/31131490/how-to-subscribe-to-an-event-on-a-service-in-angular2
//http://www.c-sharpcorner.com/article/asp-net-signalr-angular2-and-typescript-real-time-clock/
//https://damienbod.com/2017/09/12/getting-started-with-signalr-using-asp-net-core-and-angular/