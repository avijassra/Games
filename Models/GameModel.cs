namespace Games.Models {

    using System;

    public class GamesModel {
        public GamesModel(Guid id) {
            Id = id;
        }

        public Guid Id { get; set; }

        public string Name { get; set; }
    }
}