package domparsebm7sgf;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

public class DomReadBM7SGF {

public static void main(String[] args) throws ParserConfigurationException, SAXException, IOException {
 try{       
     
    DocumentBuilder builder = DocumentBuilderFactory.newInstance().newDocumentBuilder();
    Document doc = builder.parse(new File("src/domparsebm7sgf/orarendBM7SGF.xml"));
    doc.getXmlEncoding();
    doc.getDocumentElement().normalize();
    System.out.println("Root element :" + doc.getDocumentElement().getNodeName()+" :");
    NodeList nodeList = doc.getElementsByTagName("ora");
    
         for (int temp = 0; temp < nodeList.getLength(); temp++) {
            Node nNode = nodeList.item(temp);
            System.out.println("\nCurrent Element :" + nNode.getNodeName());
            NodeList oraList = doc.getElementsByTagName("ora");
            
                        for (int i = 0; i < oraList.getLength(); i++) {
                Node oraNode = oraList.item(i);
                if (oraNode.getNodeType() == Node.ELEMENT_NODE) {
                    Element oraElement = (Element) oraNode;

                    String id = oraElement.getAttribute("id");
                    String type = oraElement.getAttribute("type");

                    NodeList idopont = oraElement.getElementsByTagName("idopont");
                    Element idopontElement = (Element) idopont.item(0);
                    String nap = idopontElement.getElementsByTagName("nap").item(0).getTextContent();
                    String kezdet = idopontElement.getElementsByTagName("kezdet").item(0).getTextContent();
                    String veg = idopontElement.getElementsByTagName("veg").item(0).getTextContent();

                    String kurzus = oraElement.getElementsByTagName("kurzus").item(0).getTextContent();
                    String helyszin = oraElement.getElementsByTagName("helyszin").item(0).getTextContent();
                    String oktato = oraElement.getElementsByTagName("oktato").item(0).getTextContent();
                    String szak = oraElement.getElementsByTagName("szak").item(0).getTextContent();

                    System.out.println("Órarend id: " + id);
                    System.out.println("Órarend típus: " + type);
                    System.out.println("Nap: " + nap);
                    System.out.println("Kezdet: " + kezdet);
                    System.out.println("Vég: " + veg);
                    System.out.println("Kurzus: " + kurzus);
                    System.out.println("Helyszín: " + helyszin);
                    System.out.println("Oktató: " + oktato);
                    System.out.println("Szak: " + szak);
                    System.out.println();
                    }
                 }
                 

            }

        }
  catch (Exception e) {
         e.printStackTrace();
      }
    }
}