var varConfig = { "version": 5, "datetime": "2016-06-16 0:7:21", "monitorgroups": [ { "name": "Applications Manager", "resourceid": "10000011", "details": [ { "name": "169.254.165.8", "type": "Port-Test", "x": 737.5362049897641, "y": 513.0345265240518, "rel": [] }, { "name": "169.254.165.8_PGSQL", "type": "PostgreSQL", "x": 605.4891522811453, "y": 364.5898291729522, "rel": [ "bd_Windows 8", "169.254.165.8" ] }, { "name": "169.254.165.8_Tomcat-server", "type": "Tomcat-server", "x": 379.2218147126031, "y": 362.43401091102015, "rel": [ "169.254.165.8_PGSQL" ] }, { "name": "AppManager Home Page", "type": "UrlMonitor", "x": 107.97033564206436, "y": 361.13568741031764, "rel": [ "169.254.165.8_Tomcat-server" ] }, { "name": "bd_Windows 8", "type": "Windows 10", "x": 765.8737521602721, "y": 204.7528721738858, "rel": [] } ] } ] };