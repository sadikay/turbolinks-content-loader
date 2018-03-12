document.addEventListener("turbolinks:request-start", function(event) {

  var loaderAttributes = document.querySelectorAll('[data-turbolinks-loader]')

    if (loaderAttributes.length > 0) {

      let style, attribute = null
      console.log(event.data);

      let targetPath = event.data.url.replace(document.location.origin, '')
      console.log(targetPath);
      for (let node of loaderAttributes) {
        if (targetPath.startsWith(node.getAttribute('data-turbolinks-loader-path'))) {
          style = node.getAttribute('data-turbolinks-loader')
          attribute = node
          break
        }
      }

      if (style && attribute){

        let template = `
          <div class="react-live-preview" style="width: 400px; height: 200px;">
            <svg viewBox="0 0 400 200" version="1.1" preserveAspectRatio="xMidYMid meet">
              <rect clip-path="url(#p1hoi6c29fk)" x="0" y="0" width="400" height="200" style="fill: url(&quot;#53967mcb4cd&quot;);"></rect>
              <defs>
                <clipPath id="p1hoi6c29fk"><rect x="70" y="15" rx="4" ry="4" width="117" height="6.4">
                  </rect><rect x="70" y="35" rx="3" ry="3" width="85" height="6.4"></rect>
                  <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4"></rect>
                  <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4"></rect>
                  <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4"></rect>
                  <circle cx="30" cy="30" r="30"></circle>
                </clipPath>
                <linearGradient id="53967mcb4cd">
                  <stop offset="0.0908031" stop-color="#f3f3f3">
                    <animate attributeName="offset" values="-2; 1" dur="2s" repeatCount="indefinite"></animate>
                  </stop>
                  <stop offset="0.590803" stop-color="#ecebeb">
                    <animate attributeName="offset" values="-1.5; 1.5" dur="2s" repeatCount="indefinite"></animate>
                  </stop>
                  <stop offset="1.0908" stop-color="#f3f3f3">
                    <animate attributeName="offset" values="-1; 2" dur="2s" repeatCount="indefinite">
                    </animate>
                  </stop>
                </linearGradient>
              </defs>
            </svg>
          </div>`;


        attribute.innerHTML = template
        console.log(style, attribute)
        // Turbolinks.clearCache()
      }
    }
})
