using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication6.Models;

namespace WebApplication6.data.config
{
    public class StudentConfiguration : IEntityTypeConfiguration<Student>
    {
        public void Configure(EntityTypeBuilder<Student> builder)
        {
            builder.ToTable("Student");
            builder.Property(s => s.Age)
                .IsRequired(false);
          
          builder.HasKey(s => s.StudentId);
          
            
            builder.HasData
            (
                new Student
                {
                    StudentId = Guid.NewGuid(),
                    Name = "John Doe",
                    Age = 30
                },
                new Student
                {
                    StudentId = Guid.NewGuid(),
                    Name = "Jane Doe",
                    Age = 25
                },
                new Student
                {
                    StudentId = Guid.NewGuid(),
                    Name = "Mike Miles",
                    Age = 28
                }
            );
        }
    }
}
