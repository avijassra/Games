namespace Games.Hubs 
{
    using System;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.SignalR;

    using Models;

    public class GamesHub : Hub
    {
        private AppCache Cache { get; set; }

        public GamesHub(AppCache appCache) {

        }

        public Task MessageToPublish(string message)
        {
            return Clients.All.InvokeAsync("NewIncomingMessage", message);
        }

        public Task RegisterNewGame(Guid id) {
            Cache.Games.Add(new GamesModel(id));
            return Clients.All.InvokeAsync("GamesWaitingPlayers", $"Game - {id} | {Cache.Games.Count}");
        }

        // public Task NotifyForNewGame(Guid gId)//, string gName, string pMarker)
        // {
        //     //return Clients.All.InvokeAsync("WaitingForGames", new { id = gId, name = gName, marker = pMarker });
        //     return Clients.All.InvokeAsync("WaitingForGames", "Message Recieved");
        // }
    }
}

//https://blogs.msdn.microsoft.com/webdev/2017/09/14/announcing-signalr-for-asp-net-core-2-0/
//https://stackoverflow.com/questions/31131490/how-to-subscribe-to-an-event-on-a-service-in-angular2
//http://www.c-sharpcorner.com/article/asp-net-signalr-angular2-and-typescript-real-time-clock/
//https://damienbod.com/2017/09/12/getting-started-with-signalr-using-asp-net-core-and-angular/