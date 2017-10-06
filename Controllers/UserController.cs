namespace ng2_jokes
{
    using System;
    using Microsoft.AspNetCore.Mvc;

    public class UserController 
    {
        [Route("api/user")]
        public object Post(string firstname, string lastname, int age, string language)
        {
            //https://codingblast.com/asp-net-core-signalr-simple-chat/
            return new {
                Id = Guid.NewGuid().ToString(),
                FirstName = firstname,
                LastName = lastname,
                Age = age,
                Language = language
            }; 
        }
    }
}