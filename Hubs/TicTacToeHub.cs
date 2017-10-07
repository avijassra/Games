namespace Games.Hubs 
{
    using System;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.SignalR;

    public class TicTacToeHub : Hub
    {
        
        public Task Send(string message)
        {
            return Clients.All.InvokeAsync("Send", message);
        }
    }
}

//https://blogs.msdn.microsoft.com/webdev/2017/09/14/announcing-signalr-for-asp-net-core-2-0/
//https://stackoverflow.com/questions/31131490/how-to-subscribe-to-an-event-on-a-service-in-angular2
//http://www.c-sharpcorner.com/article/asp-net-signalr-angular2-and-typescript-real-time-clock/
//https://damienbod.com/2017/09/12/getting-started-with-signalr-using-asp-net-core-and-angular/