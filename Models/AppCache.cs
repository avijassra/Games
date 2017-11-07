namespace Games.Models {
    using System.Collections.Generic;

    public class AppCache {
        public AppCache() {
            Games = new List<GamesModel>();
        }
        
        public List<GamesModel> Games { get; set; }
    }
}