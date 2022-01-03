using System.ComponentModel.DataAnnotations;

namespace WebApplication6.Models
{
    public class Person
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public int Rate { get; set; }

    }
}
