namespace Games.Models {
    using System;

    public class PlayerModel {
        
        public Guid Id { get; set; }
        
        public Guid ScreenId { get; set; }

        public string Name { get; set; }
        
        public string Marker { get; set; }
        
        public int Score { get; set; }
    }
}