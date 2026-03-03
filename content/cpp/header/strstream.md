---
title: "Standard library header <strstream> (deprecated in C++98)(removed in C++26)"
source_path: "cpp/header/strstream"
category: "header"
deprecated: "C++98"
---

This header is part of the [Input/Output](/cpp/io/) library.

## Notes
<strstream> is deprecated in C++98 and removed in C++26 (see [P2867R1](https://wg21.link/P2867R1)).

The reason for removal is that C++20 and C++23 provide superior replacement facilities, such as the ability to move strings efficiently out of [std::stringstream](/cpp/io/basic_stringstream/)s (since C++20, see [P0408R7](https://wg21.link/P0408R7)), and the [<spanstream>](/cpp/header/spanstream/) library (since C++23, see [P0448R4](https://wg21.link/P0448R4)).
