import requests
import json

url = ""

headers = {"accept": "application/json"}

response = requests.get(url, headers=headers)       #Pido la informacion a la API



# Verificar si la solicitud fue exitosa (código de estado 200)
if response.status_code == 200:
    # Convertir la respuesta JSON en un diccionario de Python
    data = response.json()

    # Guardar los datos en un archivo JSON
    with open('rankings.json', 'w') as file:
        json.dump(data, file, indent=4)      # Escribir los datos en el archivo 'rankings.json' en formato JSON con una sangría de 4 espacios
    print("Datos guardados correctamente en rankings.json")


else:
    # En caso de no ser exitoso el contacto anterior con el server tira error
    print("Error al hacer la solicitud:", response.status_code)
