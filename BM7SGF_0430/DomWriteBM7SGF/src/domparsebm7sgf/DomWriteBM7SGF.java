package domparsebm7sgf;

import java.io.File;
import java.io.IOException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class DomWriteBM7SGF {

    public static void main(String[] args) throws ParserConfigurationException, SAXException, IOException {
        try {
            DocumentBuilder builder = DocumentBuilderFactory.newInstance().newDocumentBuilder();
            Document doc = builder.parse(new File("src/domparsebm7sgf/orarendBM7SGF.xml"));
            doc.getDocumentElement().normalize();

            Document newDoc = builder.newDocument();
            Element rootElement = newDoc.createElement("orarend");
            newDoc.appendChild(rootElement);

            NodeList nodeList = doc.getElementsByTagName("ora");
            for (int temp = 0; temp < nodeList.getLength(); temp++) {
                Node nNode = nodeList.item(temp);
                if (nNode.getNodeType() == Node.ELEMENT_NODE) {
                    Element oraElement = (Element) nNode;

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

                    Element newOraElement = newDoc.createElement("ora");
                    newOraElement.setAttribute("id", id);
                    newOraElement.setAttribute("type", type);

                    Element newIdopontElement = newDoc.createElement("idopont");
                    Element newNapElement = newDoc.createElement("nap");
                    newNapElement.appendChild(newDoc.createTextNode(nap));
                    Element newKezdetElement = newDoc.createElement("kezdet");
                    newKezdetElement.appendChild(newDoc.createTextNode(kezdet));
                    Element newVegElement = newDoc.createElement("veg");
                    newVegElement.appendChild(newDoc.createTextNode(veg));
                    newIdopontElement.appendChild(newNapElement);
                    newIdopontElement.appendChild(newKezdetElement);
                    newIdopontElement.appendChild(newVegElement);
                    newOraElement.appendChild(newIdopontElement);

                    Element newKurzusElement = newDoc.createElement("kurzus");
                    newKurzusElement.appendChild(newDoc.createTextNode(kurzus));
                    newOraElement.appendChild(newKurzusElement);

                    Element newHelyszinElement = newDoc.createElement("helyszin");
                    newHelyszinElement.appendChild(newDoc.createTextNode(helyszin));
                    newOraElement.appendChild(newHelyszinElement);

                    Element newOktatoElement = newDoc.createElement("oktato");
                    newOktatoElement.appendChild(newDoc.createTextNode(oktato));
                    newOraElement.appendChild(newOktatoElement);

                    Element newSzakElement = newDoc.createElement("szak");
                    newSzakElement.appendChild(newDoc.createTextNode(szak));
                    newOraElement.appendChild(newSzakElement);

                    rootElement.appendChild(newOraElement);
                }
            }

            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = transformerFactory.newTransformer();
            transformer.setOutputProperty(OutputKeys.INDENT, "yes");
            DOMSource domSource = new DOMSource(newDoc);
            StreamResult streamResult = new StreamResult(new File("src/domparsebm7sgf/orarend1BM7SGF.xml"));
            transformer.transform(domSource, streamResult);

            System.out.println("New XML file created successfully!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
