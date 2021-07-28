
#creer une fonction CSV => dico
#creer une fonction recursive de génération du texte
#creer une fonction de génération du nouveau fichier et sauvegarde de l"ancienne version
#créer une fonction de restauration à la version antèrieure


#arguments (excel, fichier js, freeze, zone, target)


#optionnel: interface graphique tkinter
import csv
import os

def to_dico(excel): #Prend le nom du fichier csv en entree et renvoie un dictionnaire organisée par NodeID puis par elements (Text, buttons, childs)
    dico={}
    with open(excel,newline="") as csvfile:
        reader=csv.DictReader(csvfile)
        for row in reader:
            dico[row["NodeID"]]={"text":row["Text"],"buttons":row["Buttons"].split(","),"childs":row["Childs"].split(",")}
    return dico


def recursPopup(dico,line,target):
    if len(line["buttons"])==1 and line["childs"][0]=="":
        return "WA.openPopup('"+target+"','"+line["text"]+"',[{label:'"+line["buttons"][0]+"',className:'primary',callback:(popup)=>{popup.close();WA.restorePlayerControls()}}])"


    else:
        str="WA.openPopup('"+target+"','"+line["text"]+"',["
        for i in range(len(line['buttons'])):
            str+="{label:'"+line['buttons'][i]+"',className:'primary',callback:(popup)=>{popup.close();"+recursPopup(dico,dico[line['childs'][i]],target)+"}},"
        str+="])"
        return str
        
def create_dialog(excel,freeze,zone,target):
    dico=to_dico(excel)
    str= "WA.onEnterZone('"+zone+"',()=>{"
    if freeze:
        str+="WA.disablePlayerControls();"
    str+=recursPopup(dico,dico['0'],target)
    str+=";})"

    return str

def generateJS(excel,scriptname,freeze,zone,target):
    old=scriptname.split('.')[0]+'old.'+scriptname.split('.')[1]
    oldscript=open(old,"w")
    oldscript.write(open(scriptname,"r").read())
    script=open(scriptname,'a')
    script.write(create_dialog(excel,freeze,zone,target))
    print("dialogue ajouté, veuiller vérifier le bon fonctionnement dans WorkAdventure")

def restore(scriptname):
    old=scriptname.split('.')[0]+'old.'+scriptname.split('.')[1]
    new=open(scriptname,'w')
    new.write(open(old,'r').read())
    os.remove(old)


action=input ("Choix de l'action, Restauration de script: 1; Création d'un nouveau dialogue:2. Entrez votre choix     ")
if action=='1':
    scriptname=input("Entrez le nom du script que vous souhaitez restaurer à une version antèrieure (avec l'extension)     ")
    restore(scriptname)

elif action =='2':
     scriptname=input("Entrez le nom du script que vous souhaitez restaurer à une version antèrieure (avec l'extension)     ")
     excel=input("Entrez le nom du fichier CSV contenant le dialogue(avec l'extension)      " )
     choixfreeze=input("Souhaitez-vous que le personnage soit figé le temps du dialogue ? oui/non     ")
     if choixfreeze=="oui":
         freeze=True
     elif choixfreeze=="non":
        freeze=False
     target=input("indiquer le nom du rectangle défini dans Tiled où le popup doit apparaître (respectez bien les majuscules et minuscules)")
     zone=input("indiquez le nom de la zone de déclenchement du popup définie dans Tiled (respectez bien les majuscules et minuscules      ")
     generateJS(excel,scriptname,freeze,zone,target)