from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_POST(self):
        print("hello")


httpd = HTTPServer(('', 443), SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket(httpd.socket, certfile='/etc/ssl/private/apache-selfsigned.crt', server_side=True)
httpd.serve_forever()