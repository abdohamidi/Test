'Debug_Start()

EXTLoader(3594)



With Browser("Browser").Page("edcloud Personal")
	
	'.WebButton("Beschäftigungsinformationen").Click
	
	If Not .WebElement("Beschäftigungsinformationen").Exist(3) Then
		Reporter.ReportEvent micFail, "Seite wurde nicht gefunden.",  "Die -Seite konnte nicht gefunden werden!"				
	Else
	'Peronalnummer
	.WebEdit("Personalnummer").Set  Parameter.Item("ip_personalnummer")
	'Abteilung
	.WebEdit("Abteilung").Set  Parameter.Item("ip_abteilung")
	'Beschaeftigt Als
	.WebEdit("BeschaeftigtAls").Set   Parameter.Item("ip_beschaeftigtals")
	'Außentätigkeit
       .WebButton("Außendienst").Click
     .WebList("Außentaetigkeit").Select   Parameter.Item("ip_aussentaetigkeit")
     
     'Hauptbeschaeftigung
     .WebButton("Hauptbeschaeftigung").Click
     .WebList("HauptbeschaeftigungList").Select  Parameter.Item("ip_hauptbeschaeftigung")
     'Weitere Taetigkeit
        .WebButton("WeitereTaetigkeit").Click
        .WebList("Außentaetigkeit").Select  Parameter.Item("ip_weiteretaetigkeit")
    'Arbeitserlaubnis Bis
      .WebEdit("ArbeitserlaubnisBis").Set    Parameter.Item("ip_arbeitserlaubnisbis")
'Aufenthaltserlaubnis Bis
.WebEdit("AufenthaltserlaubnisBis").Set   Parameter.Item("ip_aufenthaltserlaubnis")




End If



End  With

Private Sub Debug_Start
 
' 	===============================================
' 						Debug
' 	===============================================
If IsUserDev() Then
'Personalnummer:ip_Peronalnummer
 Parameter.Item("ip_personalnummer")="20450"
 'Abteilung:ip_abteilung
  Parameter.Item("ip_abteilung")="Qulitätssicherung"
  'Beschaeftigt Als
   Parameter.Item("ip_beschaeftigtals")="Testautomatisierer"
   'Außendiensttätigkeit
   Parameter.Item("ip_aussentaetigkeit")="Ja"
   'Hauptbeschaeftigung
    Parameter.Item("ip_hauptbeschaeftigung")="Ja"
    'Weitere Taetigkeit
    Parameter.Item("ip_weiteretaetigkeit")="Ja"
    'Arbeitserlaubnis Bis
    Parameter.Item("ip_arbeitserlaubnisbis")="01.30.2029"
    'Aufenthalserlaubnis Bis
    Parameter.Item("ip_aufenthaltserlaubnis")="01.30.2029"
' 	===============================================

Reporter.ReportEvent micPass ,"DEBUG MODUS IST AN!"," DEBUG MODUS IST AN , ALLE PARAMETER WERDEN INTERN GESETZT!!!"
End If
End Sub



