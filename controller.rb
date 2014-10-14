ignore(/2012/)
ignore(/Gemfile/)
ignore(/config.ru/)
ignore(/google/)
ignore(/server.rb/)
ignore(/stylesheets/)

ignore(/\.markdown/)
ignore(/\.md/)

ignore(/\.gitignore/)
ignore(/\.rvmrc/)
ignore(/^\..*/)     # hidden files

ignore(/sidebar\.html\.erb/)
ignore(/header\.html\.erb/)

layout "layout.erb"

helpers do
  def erb arg
    render(arg.to_s+".html.erb")
  end
end
