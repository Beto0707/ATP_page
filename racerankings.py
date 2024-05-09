import requests
import json

url = "https://api.sportradar.com/tennis/trial/v3/en/rankings.json?api_key=a5Dlk2qopT1pqf8puNct42XR7fyopAJ02F5rXQkh"

headers = {"accept": "application/json"}

response = requests.get(url, headers=headers)

# Verifica si la solicitud fue exitosa
if response.status_code == 200:
    # Guarda la respuesta en un archivo JSON con formato
    with open('rankings.json', 'w') as f:
        json.dump(response.json(), f, indent=4)
    print("Datos guardados exitosamente en 'rankings.json'")
else:
    print("Error al obtener los datos:", response.status_code)
