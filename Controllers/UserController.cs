namespace ng2_jokes
{
    using System;
    using Microsoft.AspNetCore.Mvc;

    public class UserController 
    {
        [Route("api/user")]
        public object Post(string firstname, string lastname, int age, string language)
        {
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