<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($_POST['name']) && !empty($_POST['pin']) && !empty($_POST['fruit1']) && isset($_POST['age']) && isset($_POST['shoe-size']) && isset($_POST['confidence'])) {
        $name = $_POST['name'];
        $pin = $_POST['pin'];
        $fruit1 = $_POST['fruit1'];
        $age = $_POST['age'];
        $shoeSize = $_POST['shoe-size'];
        $confidence = $_POST['confidence'];

        $data = array(
            'name' => $name,
            'pin' => $pin,
            'fruit1' => $fruit1,
            'age' => $age,
            'shoeSize' => $shoeSize,
            'confidence' => $confidence
        );

        $json_data = json_encode($data);

        $file_path = 'C:/projekt/1.feladat/data.json';
        
        file_put_contents($file_path, $json_data);

        echo "<h2>Sikeres beküldés!</h2>";
        echo "<p>A beküldött adatok:</p>";
        echo "<ul>";
        echo "<li>Név: $name</li>";
        echo "<li>PIN kód: $pin</li>";
        echo "<li>Kedvenc gyümölcs: $fruit1</li>";
        echo "<li>Életkor: $age</li>";
        echo "<li>Lábméret: $shoeSize</li>";
        echo "<li>Önbizalom: $confidence</li>";
        echo "</ul>";

    } else {
        echo "<h2>Hiba:</h2>";
        echo "<p>Kérjük, töltse ki az összes mezőt!</p>";
        include 'BM7SGF_űrlap.html'; 
    }
} else {
    include 'form.html'; 
}
?>
