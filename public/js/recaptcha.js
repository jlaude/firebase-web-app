function recaptchaFunction(siteAction, redirectURI) {
    console.log("onclick function");
      grecaptcha.enterprise.ready(async () => {
        const token = await grecaptcha.enterprise.execute('6Lcgk2MpAAAAAMxdw1R_ys0iw_dTd3NOL_lDwyCY', {action: siteAction});
        console.log("recaptcha token: " + token);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/createRecaptchaAssessment');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('recaptchaAssessment=' + token + "&action=" + siteAction);
        xhr.responseType ="json";

        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            var score = xhr.response.score
            console.log(score);

            if (score < .5) {
              window.location.href = "/blocked";
            } else {
              window.location.href = "/" + redirectURI + "?score=" + score;
            }

            return score;
          }
        }
      });

  }