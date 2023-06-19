using System;
using System.Collections.Generic;
using System.IO;
using System.Net;

namespace csvcheck
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Current TLS protocol version: " + ServicePointManager.SecurityProtocol);
            Dictionary<string, string> map = new Dictionary<string, string>();
            string filePath =
   @"C:\Interface\VhsInterface\Wegmans_Interface\WG_VEHS\BodyPartsMapping.csv";
            StreamReader reader = null;
            if (File.Exists(filePath))
            {
                reader = new StreamReader(File.OpenRead(filePath));
               
                while (!reader.EndOfStream)
                {
                    var line = reader.ReadLine();
                    string[] values = line.Split('|');
                    map.Add(values[1], values[2] + "|" + values[3]);
                    
                }
            }
            else
            {
                Console.WriteLine("File doesn't exist");
            }
            Console.ReadLine();
        }
    }
}
