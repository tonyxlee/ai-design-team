"""preview_server.py — 산출물 정적 미리보기 서버.

산출 HTML은 루트경로(/favicon, /pricing 등)와 상대 자산을 쓰므로,
'해당 폴더를 사이트 루트로' 서빙해야 정상 렌더된다.

usage:  python preview_server.py <dir> [port]
"""
import sys
import functools
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler


def serve(directory: str, port: int = 8830):
    handler = functools.partial(SimpleHTTPRequestHandler, directory=directory)
    httpd = ThreadingHTTPServer(("127.0.0.1", port), handler)
    print(f"serving {directory} → http://127.0.0.1:{port}/")
    httpd.serve_forever()


if __name__ == "__main__":
    d = sys.argv[1] if len(sys.argv) > 1 else "."
    p = int(sys.argv[2]) if len(sys.argv) > 2 else 8830
    serve(d, p)
