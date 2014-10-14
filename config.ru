use(Rack::Static,
    root: "public",
    index: "index.html",
    urls: { "/" => "index.html",
            "/hosts/faq.html"=> "faq.html",
            "/hosts" => "faq.html" }
   )

run Rack::URLMap.new({
  "/" => Rack::Directory.new("public"),
})
