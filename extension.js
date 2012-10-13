/*
 * Copyright (C) 2012 Jamie Nicol <jamie@thenicols.net>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, see <http://www.gnu.org/licenses/>.
 */

const Main = imports.ui.main;

let workspacesDisplay;
let savedFunc;

function init() {
    workspacesDisplay = Main.overview._viewSelector._workspacesDisplay;
}

function enable() {
    savedFunc = workspacesDisplay._updateAlwaysZoom;

    workspacesDisplay._updateAlwaysZoom = function() {
        return true;
    };
    workspacesDisplay._alwaysZoomOut = true;
}

function disable() {
    workspacesDisplay._updateAlwaysZoom = savedFunc;
    workspacesDisplay._updateAlwaysZoom();
}
