require "sinatra"

get "/" do
  erb :index
end

get "/map" do
  erb :map
end

get "/style.css" do
  scss :style
end
