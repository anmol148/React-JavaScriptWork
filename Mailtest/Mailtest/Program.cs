using System;
using System.IO;
using Microsoft.Office.Interop.Word;
using System.Text.RegularExpressions;


namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                object documentFormat = 8;
                string randomName = DateTime.Now.Ticks.ToString();
                object htmlFilePath = @"C:\Riskmaster\Riskmaster21.1\Doc" + randomName + ".htm";
                _Application applicationclass = new Application();
                applicationclass.Documents.Open("C:\\Riskmaster\\Riskmaster21.1\\Riskmaster\\UI\\riskmaster\\temp\\CopyMailMerge\\mmt1824111351.doc");
                if (applicationclass.Documents.Count >= 1)
                {

                }
                applicationclass.Visible = false;
                Document document = applicationclass.ActiveDocument;

                //Save the word document as HTML file.
                document.SaveAs(ref htmlFilePath, ref documentFormat);

                //Close the word document.
                document.Close();

                //Read the saved Html File.
                string wordHTML = System.IO.File.ReadAllText(htmlFilePath.ToString());
                RegexOptions options = RegexOptions.IgnoreCase | RegexOptions.Singleline;
                Regex regx = new Regex("<body[^>]*>(?<theBody>.*)</body>", options);

                Match match = regx.Match(wordHTML);

                if (match.Success)
                {
                    string theBody = match.Groups["theBody"].Value;
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            
        }
    }
}
