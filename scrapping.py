import requests
import json
import mysql.connector

# URL que requisita dados de exoplanetas que possuem bmassj > 10.
suitablePlanetsUrl = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&where=pl_bmassj>10&format=json"
suitablePlanetsArray = []

# Estabelece comunicação com o MySQL Workbench para criação da base de dados.
connectdb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your-password",  # Inserir senha!
    # Atualizar dados para MySQL Workbench local!
)
cursor = connectdb.cursor()

# Cria base de dados.
cursor.execute("CREATE DATABASE IF NOT EXISTS exoplanets")

# Formata texto da API da NASA.


def formatText(Url, Array):
    Str = requests.get(
        Url).text[539:-2].replace('},', '};').split(';')
    for i in Str:
        Array.append(json.loads(i))

    return Array

# insire tabelas e informações na base de dados.


def insertInfo(db, tuplesStr):

    cursor = db.cursor()
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS infos(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30), mass FLOAT, hasStation VARCHAR(30))")

    sql = "INSERT INTO infos (name, mass, hasStation) VALUES %s" % tuplesStr

    cursor.execute(sql)

    db.commit()


if __name__ == '__main__':
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="your-password",  # Inserir senha!
        database="exoplanets",
        # Atualizar dados para MySQL Workbench local!
    )

    cursor = mydb.cursor()

    # Cria base de dados.
    cursor.execute("CREATE DATABASE IF NOT EXISTS exoplanets")

    # Executa função formatPlanets.
    suitablePlanetsArray = formatText(
        suitablePlanetsUrl, suitablePlanetsArray)

    # Organiza dados em tuplas para inserção única na base de dados.
    tuplesArray = []
    for i in range(0, len(suitablePlanetsArray)):
        if i == len(suitablePlanetsArray)-1:
            tuples = ("('"+str(suitablePlanetsArray[i]['pl_hostname']) +
                      "', "+str(suitablePlanetsArray[i]['pl_bmassj'])+", 'false') ")
        else:
            tuples = ("('"+str(suitablePlanetsArray[i]['pl_hostname']) +
                      "', "+str(suitablePlanetsArray[i]['pl_bmassj'])+", 'false'), ")

        tuplesArray.append(tuples)

    # Itera dados da array para tornar única string.
    tuplesStr = ""
    for item in tuplesArray:
        tuplesStr += item

    # Executa função de inserção na base de dados.
    insertInfo(mydb, tuplesStr)
