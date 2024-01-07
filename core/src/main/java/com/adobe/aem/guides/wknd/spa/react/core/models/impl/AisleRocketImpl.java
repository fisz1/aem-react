package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.aem.guides.wknd.spa.react.core.models.AisleRocket;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { AisleRocket.class,
        ComponentExporter.class }, resourceType = AisleRocketImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class AisleRocketImpl implements AisleRocket {

    @ValueMapValue
    private Number limit;

    static final String RESOURCE_TYPE = "wknd-spa-react/components/aislerocket";

    @Override
    public Number getLimit() {
        return limit;
    }

    @Override
    public String getExportedType() {
        return AisleRocketImpl.RESOURCE_TYPE;
    }

}