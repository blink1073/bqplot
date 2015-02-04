/* Copyright 2015 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define(["widgets/js/manager", "d3", "./LinearScaleModel"], function(WidgetManager, d3, ScaleModel) {
    var BaseScaleModel = ScaleModel[0];
    var DateScaleModel = BaseScaleModel.extend({
        initialize: function(range) {
            DateScaleModel.__super__.initialize.apply(this);
            this.type = "date";
            this.global_min = (new Date()).setTime(0);
            this.global_max = new Date();
        },
        min_max_changed: function() {
            this.format_date = d3.time.format(this.get("date_format"));
            this.min = this.get_date_elem("min");
            this.max = this.get_date_elem("max");
            this.min_from_data = (this.min === null);
            this.max_from_data = (this.max === null);
            this.update_domain();
        },
    });
    WidgetManager.WidgetManager.register_widget_model("DateScaleModel", DateScaleModel);
    return [DateScaleModel];
});