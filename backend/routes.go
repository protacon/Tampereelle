package main

import (
	"net/http"
)

type Route struct {
	Name string
	Method string
	Pattern string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

var routes = Routes{
	Route{
		"Index",
		"GET",
		"/",
		Index,
	},
	Route{
		"TodoIndex",
		"GET",
		"/test",
		TodoIndex,
	},
	Route{
		"TestApi",
		"GET",
		"/api/test",
		TestApi,
	},
	Route{
		Name: "WS",
		Pattern: "/ws",
		HandlerFunc: func(w http.ResponseWriter, r *http.Request) {
			hub := newHub()
			go hub.run()
			serveWs(hub, w, r)
		},
	},
}